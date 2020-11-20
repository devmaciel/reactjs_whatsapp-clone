import { Avatar, IconButton } from "@material-ui/core";
import {
	AttachFile,
	InsertEmoticon,
	Mic,
	MoreVert,
	SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
	const [seed, setSeed] = useState("");
	const [input, setInput] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		// console.log("You typed ->", input);
		setInput("");
	};

	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar
					src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
				/>

				<div className='chat__headerInfo'>
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>

				<div className='chat__headerRight'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className='chat__body'>
				<p className={`chat__message ${true && "chat__reciever"}`}>
					<span className='chat__name'>João Pedro</span>
					Hey guys Message
					<span className='chat__timestamp'>3:52pm</span>
				</p>
			</div>

			<div className='chat__footer'>
				<InsertEmoticon />
				<form>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type a message'
					/>
					<button type='submit' onClick={sendMessage}></button>
				</form>
				<Mic />
			</div>
		</div>
	);
}

export default Chat;
