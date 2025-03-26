'use client'

const error = ({error}: {error: Error}) => {
    console.log('where error',error)
    return (
        <div>error</div>
    )
}

export default error;