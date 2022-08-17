import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () => (
	<BrowserRouter>
		<Layout>
			<Routes>
				<Route exact path="/" index element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	</BrowserRouter>
);

export default App;
