import {FaHome, FaRegCalendarAlt} from 'react-icons/fa';
import {AiOutlineTeam} from 'react-icons/ai';
import {RiFoldersFill} from 'react-icons/ri';
import {HiDocumentSearch} from 'react-icons/hi';

export const links = [
	{
		id: 1,
		text: "Home",
		path: "/",
		icon: <FaHome />
	},
	{
		id: 2,
		text: "Team",
		path: "/team",
		icon: <AiOutlineTeam />
	},
	{
		id: 3,
		text: "Projects",
		path: "/projects",
		icon: <RiFoldersFill/>
	},
	{
		id: 4,
		text: "Calendar",
		path: "/calendar",
		icon: <FaRegCalendarAlt/>
	},
	{
		id: 5,
		text: "Documents",
		path: "/documents",
		icon: <HiDocumentSearch/>
	},
]