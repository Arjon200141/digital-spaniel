import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

const initialState = {
  testimonials: [],
  currentIndex: 1
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    }
  }
});

export const fetchTestimonials = () => (dispatch) => {
  const generateTestimonial = (index) => ({
    id: faker.string.uuid(),
    author: faker.person.fullName(),
    designation: `${faker.person.jobTitle()}, ${faker.company.name()}`,
    quote: "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
    profileImage: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(['men', 'women'])}/${index}.jpg`
  });

  const testimonials = Array.from({ length: 3 }, (_, i) => generateTestimonial(i));
  dispatch(setTestimonials(testimonials));
};

export const { setTestimonials, setCurrentIndex } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;