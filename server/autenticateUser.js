
import passportLocal from "passport-local"

const LocalStatergy = passportLocal.Strategy

function initialize(passport, getUserByEmail) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if (user === null) {
            return done(null, false, { message: "No user found" })
        }
        try {
            if (password === user.password) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Incorrect password" })
            }
        }
        catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStatergy({ usernameField: 'email' }),
        authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

export default initialize

