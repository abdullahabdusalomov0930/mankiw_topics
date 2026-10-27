import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { loadChapters } from './chapterRegistry';
import { Layout } from './components/Layout';
import { ProgressProvider } from './lib/progress';
import { ChapterPage } from './pages/ChapterPage';
import { ExamPage, FormulasPage, GlossaryPage, GraphsPage, MistakesPage, ReviewPage } from './pages/Global';
import { Home } from './pages/Home';

// Chapter data for the chosen language is loaded before the first render.
loadChapters().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ProgressProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="chapter/:n" element={<ChapterPage />} />
              <Route path="glossary" element={<GlossaryPage />} />
              <Route path="formulas" element={<FormulasPage />} />
              <Route path="graphs" element={<GraphsPage />} />
              <Route path="exam" element={<ExamPage />} />
              <Route path="mistakes" element={<MistakesPage />} />
              <Route path="review" element={<ReviewPage />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </StrictMode>,
  ),
);
