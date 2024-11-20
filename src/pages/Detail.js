import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import UnAuthorized from './UnAuthorized'
import DetailForm from '../components/DetailForm'
import DetailSkeleton from "../components/Skeletons/pages/DetailSkeleton"
function Detail() {
    const { isAuthenticated, user } = useAuth0()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <div>
            {isAuthenticated ? <div>
                {loading ? <DetailSkeleton /> : <DetailForm user={user} />}
            </div> : <UnAuthorized></UnAuthorized>}
        </div>

    )
}

export default Detail
