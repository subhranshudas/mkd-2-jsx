import React, { useState } from 'react';
import styled from 'styled-components';
import { EPNSTextParser } from './EPNSTextParser'
import { extractTimeStamp } from './EPNSTextParser';
import * as EpnsAPI from '@epnsproject/sdk-restapi';


const StyledApp = styled.div`
  width: 100%;

  & h1.pageHeader {
    font-size: 16px;
    color: blue;
    text-align: center;
  }

  & h3.standard {
    font-size: 12px;
    color: brown;
    text-align: center;
  }

  & .link {
    margin-bottom: 5px;
  }

  & .markdown {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    & button {
      width: 200px;
    }
  }

  & .examples p {
    margin: 0 1px;
  }
  & .instruction {
    text-align: center;
  }

  & input.address {
    width: 500px;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  border: 1px solid green;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  margin: 10px;
  min-height: 400px;
  width: 90%;
`;

const ParseRenderer = styled.div`
  width: 90%;
  margin: 20px;
  border: 2px solid black;
  padding: 10px;
  color: black;
`;

const NotifView = styled.div`
  width: 750px;
  border: 1px solid green;
  border-radius: 7px;
  padding: 7px;
  margin: 5px;
`

type OptionsType = {
  label: string;
  value: number;
}

const options : OptionsType[] = [
  { value: 1, label: 'ETH_MAIN' },
  { value: 42, label: 'ETH_KOVAN' },
];

function App() {
  const [markdownText, setMarkDownText] = useState('');
  const [sourceText, setSourceText] = useState('');
  const [loading, setLoading] = useState(false);


  const [address, setAddress] = useState('');
  const [selectedChain, setSelectedChain] = useState('42');
  const [pageSize, setPageSize] = useState(50);
  const [notifs, setNotifs] = useState<EpnsAPI.ParsedResponseType[]>();

  const { timeStamp, notificationBody } = extractTimeStamp(sourceText);

  const convertMarkDown = () => {
    setSourceText(markdownText);
  };

  const fetchNotifications = async () => {
    if (address) {
    
      try {
        setLoading(true);
        const apiResponse = await EpnsAPI.fetchNotifications({
          chainId: parseInt(selectedChain, 10),
          user: address,
          pageSize: 50
        });
        const parsedResults = EpnsAPI.parseApiResponse(apiResponse.results);

        setNotifs(parsedResults);
      } catch (e) {
        console.log('e: ', e);
      } finally {
        setLoading(false)
      }
    }
  };

  return (
    <StyledApp>
      <h1 className='pageHeader'>Markdown PoC</h1>
      <p className='instruction'>Copy paste or add 1 type of standard and test. (use ONLY either NOT both at a time!)</p>

      <Group>
        <Column>
          <h3 className='standard'>OLD Epns standard</h3>

          <div className='examples'>
            <p>[u:hello world]</p>
            <p>[ub:hello world]</p>
            <p>[ut:hello world]</p>
            <p>[up:hello world]</p>
            <p>[d:hello world]</p>
            <p>[s:hello world]</p>
            <p>[t:hello world]</p>
            <p>[e:hello world]</p>
            <p>[b:hello world]</p>
            <p>[i:hello world]</p>
            <p>[bi:hello world]</p>
            <p>[w:hello world]</p>
            <p>[wb:hello world]</p>
            <p>[mg:hello world]</p>
            <p>[dg:hello world]</p>
            <p>[ddg:hello world]</p>
            <p>[timestamp:123456]</p>
          </div>
        </Column>

        <Column>
          <div className='markdown'>
            <button onClick={convertMarkDown}>Render</button>

            <TextArea
              value={markdownText}
              onChange={(e) => setMarkDownText(e.target.value)}>  
            </TextArea>

            <ParseRenderer style={{  }}>
              <EPNSTextParser text={notificationBody} />
            </ParseRenderer>
            <p>TIMESTAMP: <b>{timeStamp}</b></p>
          </div>
        </Column>

        <Column>
          <h3 className='standard'>NEW Epns standard</h3>
          <a className='link' href='https://www.markdownguide.org/basic-syntax/' target="_blank" rel="noreferrer">https://www.markdownguide.org/basic-syntax/</a>
          <p>please also check in <a className='link' href='https://dillinger.io/'>https://dillinger.io/</a> if it works the same.</p>
          <div className='examples'>
            <p># Heading level 1</p>
            <p>## Heading level 2</p>
            <p>### Heading level 3</p>
            <p>#### Heading level 4</p>
            <p>##### Heading level 5</p>
            <p>###### Heading level 6</p>
            <p>I just love **bold text**.</p>
            <p>Italicized text is the *cat's meow*.</p>
            <p>This text is bold italic ***really important***.</p>
            <p>My favorite search engine is [Duck Duck Go](https://duckduckgo.com).</p>
            <p>{`<EPNSText color="orange">Hello World</EPNSText>`}</p>
            <p>{`<Timestamp>3647484884</Timestamp>`}</p>
          </div>
        </Column>
      </Group>

      <Group>
        <Column>
          <div>
            <input className="address" value={address} onChange={(e) => { setAddress(e.target.value); }} placeholder="Enter adddress"/>


            <select
              onChange={(e) => {
                setSelectedChain(e.target.value);
              }}
              defaultValue={selectedChain}
            >
              {options.map(({ label, value }) => {
                return (
                  <option key={`${label}_${value}`} value={value}>{label}</option>
                );
              })}
            </select>

            <input
              onChange={(e) => {
                if (e.target.value) {
                  setPageSize(parseInt(e.target.value, 10));
                } else {
                  setPageSize(50)
                }
                
              }}
              value={pageSize}
            />
          </div>
         
          <p>E.g - 0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1</p>
          <button onClick={fetchNotifications} disabled={loading}>{loading ? 'fetching...' : 'fetch' } notifications</button>
        </Column>        
      </Group>


      <Group>
        <Column>
          {notifs && notifs.length > 0 ? (
            notifs?.map((notif, i) => {
              return (
                <NotifView key={i}>
                  <EPNSTextParser text={extractTimeStamp(notif.message).notificationBody} />
                </NotifView>
              );
            })
          ) : null}
        </Column>
      </Group>
      
     

    </StyledApp>
  );
}

export default App;
