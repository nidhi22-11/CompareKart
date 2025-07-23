<img width="1920" height="1008" alt="Screenshot 2025-07-23 100732" src="https://github.com/user-attachments/assets/0d82a013-f33a-4b00-9af3-3509d80e1b24" /><img width="1920" height="1008" alt="Screenshot 2025-07-23 100732" src="https://github.com/user-attachments/assets/7c70c2d7-7db9-44ce-8e11-12b63684c9d3" />#  CompareKart — Real-Time Product Comparison App

CompareKart is a full-stack web application that lets users search and compare products from Amazon and Meesho in real-time.

--> CompareKart was created as part of my **job-focused learning strategy**. I wanted a project that:

 • Solves a real-world problem (product comparison)
 
  • Covers full-stack skills — scraping,frontend, backend.
  
  • Demonstrates problem-solving under real site restrictions (anti-bot, dynamic content)


## Live Demo
Frontend (Vercel): [https://compare-kart-git-main-nidhi-kumaris-projects-f55f805c.vercel.app](https://compare-kart-git-main-nidhi-kumaris-projects-f55f805c.vercel.app)
 Backend API: **WIP (hosted on Railway, temporary downtime)**
 
## Tech Stack
### Frontend
- React.js
- Tailwind CSS
- Axios (API integration)
- NProgress (loading bar)
### Backend  
- Node.js + Express.js
- Cheerio (Amazon scraper)
- Puppeteer (Meesho scraper)


## How It Works :
1. User enters a search query (e.g., "iPhone")
2. Frontend sends request to `/search?query=iPhone`
3. Express backend triggers:
   - `amazonScraper.js` using Cheerio
   - `meeshoScraper.js` using Puppeteer
4. Scraped product data is returned as JSON
5. React frontend maps & renders the product cards

## Author
**Nidhi**  
🔗 [LinkedIn](https://www.linkedin.com/in/nidhi-mailbox)  
💻 [GitHub](https://github.com/nidhi22-11)

## 📷 Screenshots :

<img width="1920" height="1008" alt="Screenshot 2025-07-23 100723" src="https://github.com/user-attachments/assets/a6d4ae3f-551b-4e89-83c5-19132993d4d1" />


<img width="1920" height="1008" alt="Screenshot 2025-07-23 100732" src="https://github.com/user-attachments/assets/bfe227dc-f24c-48c5-a702-b9c04555bf1b" />
<img width="1920" height="1008" alt="Screenshot 2025-07-23 100856" src="https://github.com/user-attachments/assets/4f335d76-dc30-4c02-b916-58a19ac31f03" />


