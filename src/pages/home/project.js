import React from 'react';
import styled from 'styled-components';

const ProjectWrap = styled.div`
  padding: 10px;
  font-size: 1rem;
  background-color: #fbfbfb;
  margin: 15px 0;
  max-width: 550px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
  transition: all 0.2s;
`;
const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Description = styled.div`
  margin-top: 5px;
`;
const TagWrap = styled.div`
  margin-top: 7px;
`;
const Tag = styled.span`
  padding: 2px 4px;
  background-color: #eaeaea;
  color: #666;
  font-size: 0.8rem;
  margin: 2px;
  border-radius: 3px;
`;
const Category = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #777;
  margin-right: 10px;
`;
const TitleLink = styled.a`
  color: #333;
  font-weight: 600;
  img {
    height: 15px;
    opacity: 0;
    margin-left: 5px;
    transform: translateY(1px);
    transition: all 0.15s;
  }
  &:hover img {
    opacity: 0.6;
  }
`;
const StyledDate = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: darkgray;
  margin-left: 10px;
`;

const Project = ({ title, desc, url, category, tags, date, className }) => {
  return (
    <ProjectWrap className={className}>
      <Top>
        <TitleLink href={url} target="_blank">
          {title}
          <img src="/img/external-link.svg"/>
        </TitleLink>
        <StyledDate>{date}</StyledDate>
      </Top>
      <Description>{desc}</Description>
      <TagWrap>
        <Category>{category}</Category>
        {tags.map(t => (
          <Tag>{t}</Tag>
        ))}
      </TagWrap>
    </ProjectWrap>
  );
};

export default Project;
