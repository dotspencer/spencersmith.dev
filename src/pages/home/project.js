import React from 'react';
import styled from 'styled-components';

const ProjectWrap = styled.div`
  padding: 10px;
  font-size: 0.95rem;
  background-color: #fbfbfb;
  margin: 15px 0;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
  transition: all 0.2s;
  overflow: hidden;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Description = styled.div`
  margin-top: 6px;
`;
const TagWrap = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  padding: 2px 4px;
  background-color: #eaeaea;
  color: #666;
  font-size: 0.8rem;
  margin: 2px;
  border-radius: 3px;
`;
const TitleLink = styled.a`
  color: #333;
  font-weight: 500;
  font-size: 1.05rem;
  img {
    height: 15px;
    opacity: 0.3;
    margin-left: 5px;
    transform: translateY(1px);
    transition: all 0.15s;
  }
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
const Emphasis = styled.span`
  display: inline;
  font-family: 'Nanum Pen Script', sans-serif;
  font-size: 1.3rem;
  color: indianred;
  background-color: #ed143d17;
  padding: 0 6px;
  border-radius: 4px;
`;

const Project = ({ title, desc, url, category, tags, date, emphasis, className }) => {
  return (
    <ProjectWrap className={className}>
      <Top>
        <TitleLink href={url} target="_blank">
          {title}
          <img src="/img/external-link.svg"/>
        </TitleLink>
        {emphasis && (
          <Emphasis>{emphasis}</Emphasis>
        )}
        <StyledDate>{date}</StyledDate>
      </Top>
      <Description>{desc}</Description>
      <TagWrap>
        <Category>{category}</Category>
        {tags.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))}
      </TagWrap>
    </ProjectWrap>
  );
};

export default Project;
