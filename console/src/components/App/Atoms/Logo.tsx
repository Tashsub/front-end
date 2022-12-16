import React from "react";
import monogram from "assets/monogram.svg";

type appProps = {
	height: number;
};

function Logo({ height }: appProps) {
	return (
		<div>
			<img alt="Kraken Flex" height={height} src={monogram} />
		</div>
	);
}

export default Logo;
