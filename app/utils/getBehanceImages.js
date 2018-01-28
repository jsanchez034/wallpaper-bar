import Behance from 'behanceapi';
import promisify from 'micro-promisify';

const behance = new Behance('B16KaUvwkHQiLxyIsSceWim2XCKBfFk1');

const getProjectsAsync = promisify(behance.getBehanceUserProjects.bind(behance));


export default function getBehanceImages() {
  return getProjectsAsync('jamesgilleard', {}).then((result) => {
    const resultJson = JSON.parse(result);
    return resultJson.projects.map(({ id, covers }) => {
      const { original: url, 404: thumbUrl } = covers;
      return {
        id,
        width: 0,
        height: 0,
        thumbUrl,
        url
      };
    });
  });
}
