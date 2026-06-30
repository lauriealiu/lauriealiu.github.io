import React from 'react';

function Games() {
  const nytGames = [
    {
      name: 'Mini Crossword',
      record: '0:08',
      link: 'https://www.nytimes.com/crosswords/game/mini',
      note: 'Solve this bite-sized puzzle in just a few minutes.'
    },
    {
      name: 'Midi Crossword',
      record: '0:53',
      link: 'https://www.nytimes.com/crosswords/game/midi',
      note: 'A go-to mid-sized crossword puzzle.'
    },
    {
      name: 'NYT Crossword',
      record: '11:35 (Monday)',
      link: 'https://www.nytimes.com/crosswords/game/daily',
      note: 'Get clued in with wordplay, every day.'
    },
    {
      name: 'Spelling Bee',
      record: 'Genius',
      link: 'https://www.nytimes.com/puzzles/spelling-bee',
      note: 'How many words can you make with 7 letters?'
    },
    {
      name: 'Wordle',
      record: '2 Guesses',
      link: 'https://www.nytimes.com/games/wordle',
      note: 'Guess the 5-letter word with 6 chances.'
    },
    {
      name: 'Connections',
      record: 'Perfect Solve',
      link: 'https://www.nytimes.com/games/connections',
      note: 'Group words that share a common thread.'
    },
    {
      name: 'Strands',
      record: 'Solved with no hints',
      link: 'https://www.nytimes.com/games/strands',
      note: 'Find hidden words and uncover the day’s theme.'
    },
    {
      name: 'Pips',
      record: 'Easy: 0:08, Medium: 0:13, Hard: 1:50',
      link: 'https://www.nytimes.com/games/pips',
      note: 'Place every domino in the right spot.'
    }
  ];

  const linkedinGames = [
    {
      name: 'Zip',
      record: '0:02',
      link: 'https://www.linkedin.com/games/zip',
      note: 'Complete the path.'
    },
    {
      name: 'Mini Sudoku',
      record: '0:29',
      link: 'https://www.linkedin.com/games/mini-sudoku',
      note: 'Tiny grid, big pressure.'
    },
    {
      name: 'Patches',
      record: '0:03',
      link: 'https://www.linkedin.com/games/patches',
      note: 'Piece it together.'
    },
    {
      name: 'Queens',
      record: '0:12',
      link: 'https://www.linkedin.com/games/queens',
      note: 'Crown each region.'
    },
    {
      name: 'Tango',
      record: '0:12',
      link: 'https://www.linkedin.com/games/tango',
      note: 'Harmonize the grid.'
    },
    {
      name: 'Pinpoint',
      record: '1 guess',
      link: 'https://www.linkedin.com/games/pinpoint',
      note: 'Guess the category.'
    },
    {
      name: 'Crossclimb',
      record: '0:18',
      link: 'https://www.linkedin.com/games/crossclimb',
      note: 'Unlock a trivia ladder.'
    },
    {
      name: 'Wend',
      record: '0:06',
      link: 'https://www.linkedin.com/games/wend',
      note: 'Weave through words.'
    }
  ];

  const renderGames = (games) => (
    <div className="games-container">
      {games.map((game) => (
        <div className="game-card" key={game.name}>
          <h3>{game.name}</h3>
          <p className="game-record">My record: {game.record}</p>
          <p>{game.note}</p>

          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="game-link"
          >
            Play game
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="games-page">
      <h2 className="resume-title">Challenge Me</h2>

      <p className="games-intro">
      Pick a puzzle, play your best game, and try to top my all-time records.
  <br />
  House rules: no hints, no autocorrect, no shortcuts.
      </p>

      <section className="games-section">
        <h3 className="games-section-title">NYT Games</h3>
        {renderGames(nytGames)}
      </section>

      <section className="games-section">
        <h3 className="games-section-title">LinkedIn Games</h3>
        {renderGames(linkedinGames)}
      </section>
    </div>
  );
}

export default Games;