import { createTheme, NextUIProvider } from "@nextui-org/react"
import App from "./index";

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {},
	}
})

const MyApp = () => {
	return (
	<NextUIProvider theme={darkTheme}><App/></NextUIProvider>
	)
}

export default MyApp;
