import React from 'react';
import AceEditor from 'react-ace';
import { FaPlayCircle } from 'react-icons/fa';

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-xcode';

import { ThemeContext } from '../../themeContext';
import Button from '../button';
import useHistory from '../../utils/customHooks/useHistory';
import { tabs } from '../../constants';

const Editor = ({
  setQuery,
  value,
  setValue,
  setCurrentTab,
}) => {
  const { setHistory } = useHistory();
  const { theme } = React.useContext(ThemeContext);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    var table_name =
      value.split(' ')[value.toLowerCase().split(' ').indexOf('from') + 1];
    setHistory(value);
    setQuery(table_name);
    setCurrentTab(tabs.output);
  };
  const editorTheme = () => {
    if (theme === 'light') return 'xcode';
    if (theme === 'dark') return 'solarized_dark';
    return 'xcode';
  };
  return (
    <div>
      <label htmlFor='editor'>
        <AceEditor
          id='editor'
          aria-label='editor'
          mode='mysql'
          theme={editorTheme()}
          name='editor'
          fontSize={16}
          minLines={15}
          maxLines={10}
          width='100%'
          showPrintMargin={false}
          showGutter
          placeholder='Write your Query here...'
          highlightActiveLine={true}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={value}
          onChange={onChange}
          showLineNumbers
        />
      </label>
      <div className='my-4'>
        <Button onClick={() => onSubmit()}>
          <FaPlayCircle />
          &nbsp;&nbsp;Run
        </Button>
      </div>
    </div>
  );
};

export default Editor;
