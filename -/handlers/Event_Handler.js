const fs = require('fs');
module.exports = (Client, discord) =>{
    const load_dir = (dirs) =>{
        const events_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for(const file of events_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            Client.on(event_name, event.bind(null, discord, Client));
        }
    }



    ['client', 'guild'].forEach(e => load_dir(e));
}