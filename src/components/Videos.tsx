import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";

const Body: React.FC = () => {
	return (
		<div className="container">
			<strong>Silicon Valley</strong>
			<p>
				Explore{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://ionicframework.com/docs/components"
				>
					UI Components
				</a>
			</p>
		</div>
	);
};

const Videos: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Videos</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Videos</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Body />
			</IonContent>
		</IonPage>
	);
};

export default Videos;
