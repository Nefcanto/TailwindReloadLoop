const ConditionalLink = ({
    children,
    condition,
    ...props
}) => {
    return !!condition && props.href ? <a {...props}>{children}</a> : <>{children}</>
}

export default ConditionalLink
