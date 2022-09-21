import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./context/ResultContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ResultContextProvider>
			<Router>
				<App />
			</Router>
		</ResultContextProvider>
	</React.StrictMode>
);
