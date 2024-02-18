import { Box } from '@mui/material';
import Navigators from './Navigators';
import CorpName from './CorpName';
import Divider from '../Divider';

export default function Header() {
  return (
    // TODO: これで良いかあとで確認
    // TODO: TopPageと別のページでの表示を変える
    // TODO: stickyにする
      <header>
        <Box className="flex text-slate-100 px-2 pt-2 my-4 mx-24">
          <Box className="flex-none">
            <CorpName />
          </Box>
          <Box className="grow">
            <Navigators />
          </Box>
        </Box>
        <Divider />
      </header>
  );
}
