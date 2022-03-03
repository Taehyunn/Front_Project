import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext
} from "react";
import styled from "styled-components";
import { getStoryIds, baseUrl, topStoriesUrl } from "../componenets/utils/Api";
import { ToptotalItem } from "../componenets/Top/ToptotalItem";
import ReactLoading from "react-loading";

const TopStyled = styled.div`
  padding: 64.7px 0 10.7px 20px;
  border-bottom: 1px solid #e8e8ed;
  h1 {
    font-family: "Pretendard";
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
const Topdetial = styled.ul`
  padding-bottom: 83px;
`;
const LoaderWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Top() {
  const [toplists, setTopList] = useState([]);
  const [loading, setLoading] = useState(false);

  // const filterMonster = toplists.map(toplist => {
  //   return toplist.title.toLowerCase().includes(Text.text.toLowerCase())
  // })

  useEffect(() => {
    const topfetchData = async () => {
      setLoading(true);
      try {
        await getStoryIds().then((data) => setTopList(data));
      } catch (err) {
        throw err;
      }
      setLoading(false);
    };

    topfetchData();

    return () => {
      setTopList([]);
    };
  }, []);

  return (
    <div>
      <TopStyled>
        <h1>TOP</h1>
      </TopStyled>
      <Topdetial>
        {toplists.slice(0, 10).map((toplist) => (
          <ToptotalItem key={toplist} toplist={toplist} />
        ))}
        {loading && (
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        )}
      </Topdetial>
    </div>
  );
}
