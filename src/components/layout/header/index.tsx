import { Box, Divider } from '@mui/material';
import Navigators from './Navigators';
import CorpName from './CorpName';

export default function Header() {
  return (
    // TODO: これで良いかあとで確認
    // TODO: headerdで囲んで、headerにはstyleを当てない
    // TODO: 余白を調整
    // TODO: 色味を変える
    <Box className="bg-gray-50 text-slate-900 px-2 pt-2">
      <header className="flex">
        <Box className="flex-none">
          <CorpName />
        </Box>
        <Box className="grow">
          <Navigators />
        </Box>
      </header>
      <Divider />
    </Box>
  );
}
