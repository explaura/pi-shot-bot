# Shot Bot

A service running on Raspberry Pi which pours shots when triggered over the internet.

## Prerequisites

### MongoDB
- Configure a MongoDB cluster
- Inside the `.env` file, replace `MONGODB_URL` with your cluster URL, including `<username>` and `<password>` with your cluster username & password

## TODO
- Host on Heroku - public API callable from internet
- Create API (/shots)
- Trigger solenoid valve
