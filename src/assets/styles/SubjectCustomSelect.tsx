import React, {FC} from 'react';
import {FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material';

interface SelectProps {
    labelId: string;
    selectedSubjects: string[];
    handleSubjectChange: (event: SelectChangeEvent<string[]>) => void;
}

const CustomSelect: FC<SelectProps> = ({labelId, selectedSubjects, handleSubjectChange}) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id={labelId}>Subject</InputLabel>
            <Select
                labelId={labelId}
                id="subject"
                multiple
                value={selectedSubjects}
                onChange={handleSubjectChange}
                renderValue={(selected) => (selected as string[]).join(', ')}
            >
                <MenuItem value="quranReading">Quran Reading</MenuItem>
                <MenuItem value="quranMemorization">Quran Memorization</MenuItem>
                <MenuItem value="arabicLearning">Arabic Learning</MenuItem>
                <MenuItem value="islamicStudies">Islamic Studies</MenuItem>
                <MenuItem value="tajweedRules">Tajweed Rules</MenuItem>
            </Select>
        </FormControl>
    );
};
export default CustomSelect;
