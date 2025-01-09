import { Typography } from 'antd'
import MainContainer from '../../Maincontainer/Maincontainer';
import BreadCrumb1 from '../../BreadCrumb/BreadCrumb1/BreadCrumb1';

const defaultImg =
  'https://imgs.search.brave.com/UzPjTtV0Jxe7R97zhY701DUJ8nYRjT4XBaznwWBs020/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMu/Y2xvdWRpbmFyeS52/cHN2Yy5jb20vaW1h/Z2UvdXBsb2FkL2Nf/c2NhbGUsZHByX2F1/dG8sZl9hdXRvLHFf/YXV0bzpiZXN0LHRf/cHJvZHVjdFBhZ2VI/ZXJvR2FsbGVyeVRy/YW5zZm9ybWF0aW9u/X3YyLHdfYXV0by9J/bmRpYSUyMExPQi9T/aWduJTIwYW5kJTIw/cG9zdGVyL0Jhbm5l/cnMvSU5fQmFubmVy/c19IZXJvLWltYWdl/XzAy';

export const NavBanner = ({ title, image = defaultImg }: any) => {
  const location = window.location?.pathname;
  const pathnames = location?.split('/');
  const page = pathnames[pathnames?.length - 1];
  console.log(location, pathnames, page);

  return (
    <MainContainer
      wraperStyle={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center z-20 text-center">
          <div className="relative flex flex-col items-center">
            <Typography.Title className="!text-background uppercase !text-4xl">
              {title || page}
            </Typography.Title>
          </div>
        </div>
        <div className="absolute flex justify-center bottom-[-20px] w-full z-20">
          <BreadCrumb1 data={pathnames?.slice(0, -1)} page={page} />
        </div>
      </div>
    </MainContainer>
  );
};

export default NavBanner;