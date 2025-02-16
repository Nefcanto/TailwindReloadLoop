const simulateError = (requestEvent) => {
    requestEvent.headers.set('X-Robots-Tag', 'noindex');
    requestEvent.json(
        500,
        {
            status: "Failed",
            message: "This is an error simulation!"
        }
    )
}

export const onGet = async requestEvent => {
    simulateError(requestEvent, true)
}

export const onPost = async requestEvent => {
    simulateError(requestEvent)
}
