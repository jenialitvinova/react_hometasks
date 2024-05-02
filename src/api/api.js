export function apiCall(){
    return (
        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
            .then(result => result.json())
            .catch(e =>{
                console.error(e)
            })
    )
}