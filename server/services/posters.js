const MongoLib = require("../lib/mongo");
const fs = require("fs");
class PostersService {
  constructor() {
    this.collection = "posters";
    this.mongoDB = new MongoLib();
  }

  async getPosters({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const posters = await this.mongoDB.getAll(this.collection, query);

    return posters || [];
  }

  async getPoster({ posterId }) {
    const poster = await this.mongoDB.get(this.collection, posterId);
    return poster || {};
  }

  async createPoster({ posters }) {
    let imgPosters = posters.map((poster) => {
      let newImg = fs.readFileSync(poster.path);
      let encImg = newImg.toString("base64");
      let newItem = {
        contentType: poster.mimetype,
        size: poster.size,
        img: Buffer(encImg, "base64"),
      };
      return newItem;
    });
    const arrayCreatedPosters = await this.arrayCreatePoster(imgPosters);
    return arrayCreatedPosters || [];
  }

  createImgPosters({ posters }) {
    return posters.map((poster) => {
      let newImg = fs.readFileSync(poster.path);
      let encImg = newImg.toString("base64");
      let newItem = {
        contentType: poster.mimetype,
        size: poster.size,
        img: Buffer(encImg, "base64"),
      };
      return newItem;
    });
  }
  async arrayCreatePoster(posters) {
    let template = [];
    for (let i = 0; i < posters.length; i++) {
      let createdPosterID = await this.mongoDB.create(
        this.collection,
        posters[i]
      );
      template.push(createdPosterID);
    }
    return template;
  }

  async arrayUpdatedPoster(posterId, posters) {
    let template = [];
    for (let i = 0; i < posters.length; i++) {
      let createdPosterID = await this.mongoDB.update(
        this.collection,
        posterId,
        posters[i]
      );
      template.push(createdPosterID);
    }
    return template;
  }

  async updatePoster({ posterId, posters }) {
    let updatedPoster = this.createImgPosters({ posters });
    const updatedPosterId = await this.arrayUpdatedPoster(posterId, updatedPoster);
    return updatedPosterId;
  }

  async deletePoster({ posterId }) {
    const deletedPosterId = await this.mongoDB.delete(
      this.collection,
      posterId
    );

    return deletedPosterId;
  }

  async deletePosters() {
    const deletedPosters = await this.mongoDB.deleteAll(this.collection);
    return deletedPosters;
  }
}

module.exports = PostersService;
