export default `query {
  allGuideSections(orderBy: _createdAt_ASC) {
    sectionId
    title
    description
  }
}
`;