import React from 'react';
import styled from 'styled-components';

const ProjectWrap = styled.div`
  padding: 15px 0;
  font-size: 1rem;
  & + & {
    border-top: 1px solid lightgray;
  }
`;
const Top = styled.div`
  ${'' /* font-weight: 600; */}
  display: flex;
  align-items: center;
`;
const Description = styled.div`
  margin-top: 6px;
`;
const TagWrap = styled.div`
  margin-top: 6px;
`;
const Tag = styled.span`
  padding: 2px 4px;
  background-color: lightgray;
  color: #666;
  font-size: 0.8rem;
  margin: 2px;
  border-radius: 3px;
`;
const Category = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #737373;
  margin-right: 10px;
`;
const TitleLink = styled.a``;
const StyledDate = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #737373;
  margin-left: 10px;
`;

const Project = ({ title, desc, url, category, tags, date, className }) => {
  return (
    <ProjectWrap className={className}>
      <Top>
        <TitleLink href={url} target="_blank">{title}</TitleLink>
        <StyledDate>({date})</StyledDate>
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
