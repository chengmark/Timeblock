import { FunctionComponent, ReactElement } from "react";

type ProviderType = ({ children }: { children: ReactElement }) => ReactElement
type withProviderType = (Provider: ProviderType, Component: FunctionComponent<any>) => () => ReactElement

const withProvider: withProviderType = (Provider: ProviderType, Component: FunctionComponent<any>) => ( () => <Provider><Component /></Provider> )

export default withProvider