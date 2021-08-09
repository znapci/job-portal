import { createServer } from 'miragejs'
import { jdata } from './data'
import { LoremIpsum } from 'lorem-ipsum'
const data = Array(15).fill(jdata)
const date = new Date()
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})
const t = data.map((post, id) =>
({
  ...post,
  id: id,
  companyUrl: 'bhavam',
  joinByDate: date.toLocaleDateString(),
  applyByDate: date.toLocaleDateString(),
  place: 'Nitte',
  tags: ['new', 'hot', 'trending', 'in-demand', 'test'],
  modalContent: {
    responsibilities: ['Design the system', 'Implement designs', 'Collaborate with others', 'Come up with new ideas'],
    requirements: ['Have basic knowledge of database', 'Know React', 'Know Node.js/express.js', 'Know git-github', 'available for next 2 months'],
    description: lorem.generateParagraphs(3)
  }
})
)

createServer({
  routes() {
    this.namespace = 'api'
    this.timing = 2000
    this.get('/post/:id', (schema, req) => {
      return `Post ${req.params.id}`
    })
    this.get('/posts/:pageNo', (schema, req) => {
      if (req.params.pageNo <= 20 && req.params.pageNo >= 1) {
        return {
          postsData: t,
          pageData: {
            totalPages: 20
          }
        }
      } else { return null }
    })
    this.post('/login', (schema, req) => {
      const password = JSON.parse(req.requestBody).password
      if (password === 'success') {
        return {
          status: 'success',
          token: 'lol'
        }
      } else {
        return {
          status: 'failure',
          token: 'lol'
        }
      }
    })
  }
})
