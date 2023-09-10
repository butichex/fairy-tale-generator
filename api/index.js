async function request(text) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Напиши сказку про бабушку и лису в пределах 20 предложений. Затем в 3 предложениях перескажи эту же сказку' }],
        model: 'gpt-3.5-turbo',
    });

    const assistantResponse = completion.choices[0].message.content;
    return assistantResponse;

}


const { Configuration, OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});