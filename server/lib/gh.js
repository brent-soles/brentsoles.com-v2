const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-unfetch');
const { simpleCache } = require('./simpleCache');

// Init cache
// with github data
const sc = new simpleCache();
async function init(){
    try{
        const resp = await fetch(`https://api.github.com/users/brent-soles/repos?access_token${process.env.GH_API_KEY}`);
        const prjData = await resp.json();
        
        //Filter initial cache data
        await prjData.forEach(project => {
            const { id, name, html_url, description, language } = project;
            sc.stash("github", {
                id,
                name,
                html_url,
                description,
                language
            })
        });
        console.log("~~~ cache initialized ~~~");
    } catch (err) {
        console.log("INIT ERROR: gh");
        sc.stash("error", true);
    }
}
init();




router.get('/github', async (req, res) => {
    
    try{
        const repos = sc.get("github");
        if(!repos){
            repos = {
                "error": "no data :("
            }
        }
        return res.json(repos);
    } catch (err){
        console.log("invalid data");
        return res.json({
            error: {
                message: `Sorry, had some trouble getting projects data.`,
                url: `https://github.com/brent-soles`
            }
        })
    }
});

module.exports = router;