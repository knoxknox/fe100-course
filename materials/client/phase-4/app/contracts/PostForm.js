import Yup from 'yup';

export default Yup.object({
  title: Yup.string().required().min(0).max(100),
  body: Yup.string().required().min(200).max(5000),
  date: Yup.mixed().test('date', '${path} should be in future', x => x && Date.now() < Date.parse(x))
});
