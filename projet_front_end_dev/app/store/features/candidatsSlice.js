import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  liste: [], // Liste des candidats
  candidatSelectionne: null, // Candidat sélectionné
};

const candidatsSlice = createSlice({
  name: 'candidats',
  initialState,
  reducers: {
    ajouterCandidat: (state, action) => {
      state.liste.push(action.payload);
    },
    selectionnerCandidat: (state, action) => {
      state.candidatSelectionne = action.payload;
    },
  },
});

export const { ajouterCandidat, selectionnerCandidat } = candidatsSlice.actions;
export default candidatsSlice.reducer;