import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

import db from "../../firebase/firebase";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		// Random String to generate the Random Avatar
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt("Please enter name for chat room");

		if (roomName) {
			// database stuff
			db.collection("rooms").add({ name: roomName });
		}
	};

	return !addNewChat ? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar
					src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
				/>
				<div className="sidebarChat__info">
					<h2>{name}</h2>
					<p>Last message...</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add new chat</h2>
		</div>
	);
}

export default SidebarChat;
