export async function getData(){
    const api = 'https://randomuser.me/api/?results=10'

    try{
        const response = await fetch(api)

        if(!response.ok){
            throw new error('Something went wrong')
        }

        return await response.json()
    }

    catch(err){
        console.error(err)
    }
}
