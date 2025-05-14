const requestDecorator = requestFunction => {
    return async (payload)=> {
        try {
            const data = await requestFunction(payload)
            return {data};
        }
        catch(error) {
            return {error};
        }
    }
}

export default requestDecorator;