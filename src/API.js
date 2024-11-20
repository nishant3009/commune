//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwZmE2OWE5Yi03MWE3LTRiNjUtOGU2Ny03NWEyNGJkM2IwNjIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5MTgzNDIzMiwiZXhwIjoxNzIzMzcwMjMyfQ.-1vuUalP-0f1svKKbSLi9XNGL1jQZGeywIt5Tln-Dvw";
// API call to create meeting
export const createMeeting = async ({ token }) => {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
        method: "POST",
        headers: {
            authorization: `${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    //Destructuring the roomId from the response
    const { roomId } = await res.json();
    console.log(res)
    return roomId;
};