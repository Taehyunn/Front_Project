import axios from "axios";

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const askStoriesUrl = `${baseUrl}askstories.json`;
export const showStoriesUrl = `${baseUrl}showstories.json`;
export const jobStoriesUrl = `${baseUrl}jobstories.json`;
export const storyUrl = `${baseUrl}item/`;
// export const request = axios.CancelToken.source();

//Id 목록을 가져와서 데이터를 가져온다. (공통)
export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);

  return result;
};

//Top
export const getStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);
  return result;
};

//New
export const getNewIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};

//Ask
export const getAskIds = async () => {
  const result = await axios.get(askStoriesUrl).then(({ data }) => data);
  return result;
};

//Show
export const getShowIds = async () => {
  const result = await axios.get(showStoriesUrl).then(({ data }) => data);
  return result;
};

//Job
export const getJobIds = async () => {
  const result = await axios.get(jobStoriesUrl).then(({ data }) => data);
  return result;
};

// Show 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/showstories.json
// Job 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/jobstories.json
//New 주제의 글 목록 조회하기 : https://hacker-news.firebaseio.com/v0/newstories.json/

//댓글의 주소를 불러오는걸 만들어서 그걸 링크로 넣어준다 ?..

// const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
//   const newStoriesUrl = `${baseUrl}topstories.json`;
//   const itemUrl = `${baseUrl}item/`;

//   useEffect(() => {
//     const topNews = async () => {
//       try {
//         setError(null);
//         setLoading(true);
//         const response = await axios.get(newStoriesUrl);
//         setArticles(response.data);
//       } catch (e) {
//         setError(e);
//       }
//       setLoading(false);
//     };
//     topNews();
//   }, []);

//   if (loading) return <div>로딩중 ...</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   if (!articles) return null;

//   return (
//     <div className="main">
//       <div className="banner">
//         <h2>TOP 5</h2>
//         <p>Find out most hot issues</p>
//         <span>
//           <StyledLink to="/Top">More</StyledLink>
//         </span>
//       </div>
//       {articles.map((article) => (
//         <TopItem article={article} />
//       ))}
//     </div>
