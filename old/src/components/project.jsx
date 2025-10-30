import styled from 'styled-components';

const ProjectWrap = styled.div`
  padding: 12px 20px;
  background-color: var(--dark-bg);
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
  transition: all 0.2s;
  overflow: hidden;
  ${p => p.$fade && (`
    opacity: 0.7;
  `)};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// const Description = styled.div`
//   margin-top: 6px;
// `;
const TagWrap = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
// const Tag = styled.span`
//   padding: 2px 4px;
//   background-color: #eaeaea;
//   color: #666;
//   font-size: 0.8rem;
//   margin: 2px;
//   border-radius: 3px;
// `;
const TitleLink = styled.a`
  color: dodgerblue;
  font-weight: 500;
  font-size: 1.05rem;
  text-decoration: none;
  img {
    height: 15px;
    opacity: 0.3;
    margin-left: 5px;
    transform: translateY(1px);
    transition: all 0.15s;
  }
  &:hover {
    text-decoration: underline;
  }
  ${p => p.dead && `
    text-decoration: line-through;
    color: initial;
    color: #999;
    // opacity: 0.8;
    font-weight: 400;
    pointer-events: none;
    cursor: default;
    &:hover {
      text-decoration: line-through;
    }
  `}
`;
const Category = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #888;
  margin-right: 10px;
`;
const StyledDate = styled(Category)`
  margin-right: 0;
  margin-left: 10px;
`;
// const Emphasis = styled.span`
//   display: inline;
//   font-family: 'Nanum Pen Script', sans-serif;
//   font-size: 1.3rem;
//   color: indianred;
//   background-color: #ed143d17;
//   padding: 0 6px;
//   border-radius: 4px;
// `;
const TopLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Discontinued = styled.div`
  background-color: #ed143d47;
  color: crimson;
  padding: 2px 9px;
  border-radius: 20px;
  font-size: .8rem;
`;
const Income = styled(Discontinued)`
  background-color: #3cb3714a;
  color: mediumseagreen;
`;

const Project = ({ title, income, desc, url, category, tags, date, emphasis, dead, v2, className }) => {
  return (
    <ProjectWrap className={className} $fade={dead}>
      <Top>
        <TopLeft>
          <TitleLink href={dead ? '' : url} target="_blank" dead={dead}>
            {title}
            {/* <img src="/img/external-link.svg"/> */}
          </TitleLink>
          {dead && <Discontinued>retired</Discontinued>}
          {income && <Income>{income}</Income>}
          {v2 && <Income>revived</Income>}
        </TopLeft>
        {/* {emphasis && (
          <Emphasis>{emphasis}</Emphasis>
        )} */}
        <StyledDate>{date.split(', ').pop()}</StyledDate>
      </Top>
      {/* <Description>{desc}</Description> */}
      <TagWrap>
        {desc && !dead && (
          <Category>{desc}</Category>
        )}
        {/* {tags && tags.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))} */}
      </TagWrap>
    </ProjectWrap>
  );
};

export default Project;
