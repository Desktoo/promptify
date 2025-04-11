import "@styles/globals.css"

import Nav from "@components/Nav"
import Provider from "@components/Provider"

const metadata = {
    title: "Promptify",
    description: "Unleash Ideas with Shared AI Prompts",
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <body suppressHydrationWarning={true} >
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
)

export default RootLayout