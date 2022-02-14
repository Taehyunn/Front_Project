import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAskIds } from "../componenets/utils/Api";
import { AsktotalItem } from "../componenets/Ask/AsktotalItem";

const AskStyled = styled.div`
  padding: 64.7px 0 10.7px 11.7px;
  border-bottom: 1px solid #e8e8ed;
  h1 {
    font-family: Pretendard;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 100%;
    display: flex;
    align-items: center;

    color: #ff6600;

    /* transform: matrix(0.97, 0, -0.28, 1, 0, 0); */
  }
`;
const Askdetial = styled.ul`
  padding-bottom: 83px;
`;

export default function Ask() {
  const [asklists, setAskList] = useState([]);

  useEffect(() => {
    getAskIds().then((data) => setAskList(data));
    return () => {
      setAskList([]);
    };
  }, []);
  return (
    <div>
      <AskStyled>
        <h1>Ask</h1>
      </AskStyled>
      <Askdetial>
        {asklists.slice(0, 20).map((asklist) => (
          <AsktotalItem key={asklist} asklist={asklist} />
        ))}
      </Askdetial>
    </div>
  );
}

//

//   const itemurl = `${baseUrl}item/`;

//   useEffect(() => {
//     const topNews = async () => {
//       try {
//         setError(null);
//         setLoading(true);
//         const response = await axios.get(
//           `${baseUrl}topstories.json`
//         );
//         setArticles(response.data);
//       } catch (e) {
//         setError(e);
//       }
//       setLoading(false);
//     };
//     topNews();
//   });

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
//       <ul className="main_list">
//         {articles.slice(0, 5).map((article, index) => (
//           <li key={index}>{article}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
