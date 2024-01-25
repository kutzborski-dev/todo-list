export default function ErrorMessage({message}: {message: string | React.ReactNode}) {
    return <h3 className="text-large text-center mb-4">{message}</h3>
}