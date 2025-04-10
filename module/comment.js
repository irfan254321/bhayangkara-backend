app.get("/getcomment", async (request, response) => {
    const results = await knex("rating").select();
    response.json(results)
})

app.post("/postcomment", async (request, response) => {
    const data = request.body;
    
    const results = await knex("rating").insert({
        name : data.name,
        comment : data.comment,
        star : data.star
    })
    response.json(results)
})