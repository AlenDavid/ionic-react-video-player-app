import React from "react";
import Player from "react-player";

import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonCard,
	IonToolbar,
} from "@ionic/react";
const Body: React.FC = () => {
	const links = [
		{
			title: "Episódio 1",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E01.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
		{
			title: "Episódio 2",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E02.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
		{
			title: "Episódio 3",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E03.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
		{
			title: "Episódio 4",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E04.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
		{
			title: "Episódio 5",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E05.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
		{
			title: "Episódio 6",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E06.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
		{
			title: "Episódio 7",
			url:
				"http://localhost:8080/static/siliconvalley/S06/Silicon.Valley.S06E07.720p.AMZN.WEBRip.x264-GalaxyTV.mkv",
		},
	];
	return (
		<div>
			{links.map((link, index) => (
				<IonCard key={index}>
					<h3 style={{ textAlign: "center" }}>{link.title}</h3>
					<Player
						url={link.url}
						height="auto"
						width="100vw"
						controls={true}
						config={{
							file: {
								forceVideo: true,
							},
						}}
					/>
				</IonCard>
			))}
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
						<IonTitle size="large">Silicon Valley</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Body />
			</IonContent>
		</IonPage>
	);
};

export default Videos;
