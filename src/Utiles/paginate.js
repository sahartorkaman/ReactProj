import _ from 'lodash'

export const paginate = (courses, CurrentPage, PerPage) => {

  const StartIndex = (CurrentPage - 1) * PerPage;

  return _(courses).slice(StartIndex).take(PerPage).value();
}