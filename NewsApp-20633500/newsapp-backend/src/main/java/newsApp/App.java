package newsApp;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class App extends AbstractAnnotationConfigDispatcherServletInitializer {
	/* Spring says, if you can make this App as your DispatcherServlet class then,
	   I will make this as my first point of execution of project   */

	@Override
	protected Class<?>[] getRootConfigClasses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		// TODO Auto-generated method stub
		Class<?>[] carray = new Class[] {ControllerConfig.class};
		return carray;
	}

	@Override
	protected String[] getServletMappings() {
		// TODO Auto-generated method stub
		String[] sarray = new String[] {"/"};
		return sarray;
	}
}
