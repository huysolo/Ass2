-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2017 at 02:28 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ass2wp`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `BlogID` int(10) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `ReleaseDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Content` text NOT NULL,
  `Photos` blob NOT NULL,
  `OnTop` tinyint(1) NOT NULL,
  `UserID` int(10) NOT NULL,
  `Summary` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CatID` int(10) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comic`
--

CREATE TABLE `comic` (
  `ComicID` int(10) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `PublishDate` date NOT NULL,
  `CardImage` blob NOT NULL,
  `BannerImage` blob NOT NULL,
  `NumOfChap` int(10) NOT NULL,
  `Quantity` int(10) NOT NULL,
  `Summary` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comiccategory`
--

CREATE TABLE `comiccategory` (
  `ComicID` int(10) NOT NULL,
  `CatID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `CmtID` int(10) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `DateCmt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserID` int(10) NOT NULL,
  `BlogID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ordercomic`
--

CREATE TABLE `ordercomic` (
  `OrderID` int(10) NOT NULL,
  `ComicID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ordertbl`
--

CREATE TABLE `ordertbl` (
  `OrderID` int(10) NOT NULL,
  `Quantity` int(10) NOT NULL,
  `DateOrder` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Sum` int(10) NOT NULL,
  `UserID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(10) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role` varchar(100) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `RegDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Username`, `Password`, `Role`, `FullName`, `Email`, `RegDate`) VALUES
  (1, 'huysolo', '123456', 'admin', 'Thanh', 'huy@gmail.com', '2017-11-27 03:56:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`BlogID`),
  ADD KEY `UserPostBlog` (`UserID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CatID`);

--
-- Indexes for table `comic`
--
ALTER TABLE `comic`
  ADD PRIMARY KEY (`ComicID`);

--
-- Indexes for table `comiccategory`
--
ALTER TABLE `comiccategory`
  ADD PRIMARY KEY (`ComicID`,`CatID`),
  ADD KEY `CatComicID` (`CatID`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`CmtID`),
  ADD KEY `UserComment` (`UserID`),
  ADD KEY `BlogComment` (`BlogID`);

--
-- Indexes for table `ordercomic`
--
ALTER TABLE `ordercomic`
  ADD PRIMARY KEY (`OrderID`,`ComicID`),
  ADD KEY `ComicID` (`ComicID`);

--
-- Indexes for table `ordertbl`
--
ALTER TABLE `ordertbl`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `UserOrder` (`UserID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `BlogID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `CatID` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `comic`
--
ALTER TABLE `comic`
  MODIFY `ComicID` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `CmtID` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ordertbl`
--
ALTER TABLE `ordertbl`
  MODIFY `OrderID` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `UserPostBlog` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comiccategory`
--
ALTER TABLE `comiccategory`
  ADD CONSTRAINT `CatComicID` FOREIGN KEY (`CatID`) REFERENCES `category` (`CatID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ComicCatID` FOREIGN KEY (`ComicID`) REFERENCES `comic` (`ComicID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `BlogComment` FOREIGN KEY (`BlogID`) REFERENCES `blog` (`BlogID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserComment` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ordercomic`
--
ALTER TABLE `ordercomic`
  ADD CONSTRAINT `ComicID` FOREIGN KEY (`ComicID`) REFERENCES `comic` (`ComicID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderID` FOREIGN KEY (`OrderID`) REFERENCES `ordertbl` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ordertbl`
--
ALTER TABLE `ordertbl`
  ADD CONSTRAINT `UserOrder` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
