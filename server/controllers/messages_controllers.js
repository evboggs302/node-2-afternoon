let messages = [];
let id = 0;

module.exports = {
  create: (req, res, next) => {
    let { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },

  read: (req, res, next) => {
    res.status(200).send(messages);
  },

  update: (req, res, next) => {
    let { text } = req.body;
    let updateID = req.params.id;
    let messageIndex = messages.findIndex(element => element.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  delete: (req, res, next) => {
    let { id } = req.params;
    messageIndex = messages.findIndex(element => element.id == id);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
};
