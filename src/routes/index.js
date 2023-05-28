import {AalimDashboard } from '../views/AalimDashboard';
import Signin from '../views/auth/Signin';
import Signup from '../views/auth/Signup';
import {ProfileAalim} from '../views/ProfileAalim';
import {Request} from '../views/Request';
import { ViewTask } from '../views/ViewTask';
import { PendingTask } from '../views/PendingTask';
import { CompleteTask } from '../views/CompleteTask';
import { Schedule } from '../views/Schedule';
import {ViewProfileAalim} from '../views/ViewProfileAalim';
import {SetProfileAalim} from '../views/SetProfileAalim';
import {SetProfileClient} from '../views/SetProfileClient';
import {ClientDashboard } from '../views/ClientDashboard';
import googleMap from '../views/GoogleMap';

import {RatingAalim} from '../views/RatingAalim';
import {RatingClient} from '../views/RatingClient';
import {NotificationAalim} from '../views/NotificationAalim';
import {NotificationClient} from '../views/NotificationClient';
import  SetScheduleAalim  from '../views/SetScheduleAalim';
import ViewScheduleAalim from '../views/ViewScheduleAalim';
import { SearchClient  } from '../views/SearchClient';
import { ProfileClient } from '../views/ProfileClient';
import {SearchDetailsClient} from '../views/SearchDetailsClient';
import {ViewProfileClient} from '../views/ViewProfileClient';
import {ClientTask} from '../views/ClientTask';
import {FeedBackClient} from'../views/FeedBackClient';
import {PendingTaskClient} from'../views/PendingTaskClient';
import {CompletedTaskClient} from '../views/CompletedTaskClient';
let routes = [
	{
		path: '/auth/signin',
		component: Signin,
		layout: 'auth',
	},
	{
		path: '/auth/signup',
		component: Signup,
		layout: 'auth',

	},
	{
		path: '/main/aalimdashboard',
		component: AalimDashboard,
		layout: 'main',

	},
	{
		path: '/main/profileAalim',
		component: ProfileAalim,
		layout: 'main',

	},
	{
		path: '/main/request',
		component: Request,
		layout: 'main',

	},
	{
		path: '/main/SetScheduleAalim',
		component: SetScheduleAalim,
		layout: 'main',

	},
	{
		path: '/main/viewtask',
		component: ViewTask,
		layout: 'main',

	},
	{
		path: '/main/pendingtask',
		component: PendingTask,
		layout: 'main',

	},
	{
		path: '/main/completetask',
		component: CompleteTask,
		layout: 'main',
	},
	{
		path: '/main/Schedule',
		component: Schedule,
		layout: 'main',
    },	
	{
		path: '/main/ViewProfileAalim',
		component: ViewProfileAalim,
		layout: 'main',
    },
	{
		path: '/main/SetProfileAalim',
		component: SetProfileAalim,
		layout: 'main',
    },
	
	{
		path: '/main/clientdashboard',
		component: ClientDashboard,
		layout: 'main',

	},
	{
		path:'/main/Googlemap',
		component: googleMap,
		layout:'main'
	},
	{
		path: '/main/SetProfileClient',
		component: SetProfileClient,
		layout: 'main',
    },
	{
		path: '/main/RatingAalim',
		component: RatingAalim,
		layout: 'main',
    },
	{
		path: '/main/RatingClient',
		component: RatingClient,
		layout: 'main',
    },
	{
		path: '/main/NotificationAalim',
		component: NotificationAalim,
		layout: 'main',
    },
	{
		path: '/main/NotificationClient',
		component: NotificationClient,
		layout: 'main',
    },
	{
		path: '/main/ViewScheduleAalim',
		component: ViewScheduleAalim ,
		layout: 'main',
    },
	{
		path: '/main/SearchClient',
		component: SearchClient ,
		layout: 'main',
    },
	{
		path:'/main/ProfileClient',
		component:ProfileClient,
		layout:'main'
	},
    {
		path:'/main/SearchDetailsClient',
		component:SearchDetailsClient,
		layout:'main'
	},
	{
		path: '/main/ViewProfileClient',
		component: ViewProfileClient,
		layout: 'main',
    },
	{
		path: '/main/ClientTask',
		component: ClientTask,
		layout: 'main',
    },
	{
		path: '/main/FeedBackClient',
		component: FeedBackClient,
		layout: 'main',
    },
	{
		path: '/main/PendingTaskClient',
		component: PendingTaskClient,
		layout: 'main',
    },
	{
		path: '/main/CompletedTaskClient',
		component: CompletedTaskClient,
		layout: 'main',
    }




	
];
export default routes;